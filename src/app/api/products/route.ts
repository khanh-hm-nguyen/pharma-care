import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";
import { handleCommonErrors } from "@/utils/errorHandler";
import { verifyAdmin } from "@/utils/auth-guard";

// GET /api/products
export async function GET() {
  try {
    await connectDB();

    const products = await ProductService.getAllProducts();

    return NextResponse.json(
      { message: "products fetched successfully", products },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Log error for debugging (only in development)
    if (process.env.NODE_ENV === "development") {
      console.error("Error fetching events by slug:", error);
    }

    // Handle specific error types
    if (error instanceof Error) {
      // Handle database connection errors
      if (error.message.includes("MONGODB_URI")) {
        return NextResponse.json(
          { message: "Database configuration error" },
          { status: 500 }
        );
      }

      // Return generic error with error message
      return NextResponse.json(
        { message: "Failed to fetch events", error: error.message },
        { status: 500 }
      );
    }

    // Handle unknown errors
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// POST /api/products
export async function POST(request: NextRequest) {
  try {
    verifyAdmin(request);
    await connectDB();
    const body = await request.json();

    const newProduct = await ProductService.createProduct(body);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: unknown) {
    return handleCommonErrors(error);
  }
}
