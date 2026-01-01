import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * GET /api/products/[id]
 * Fetches a single product by its id
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    await connectDB();

    const { id } = await params;

    const product = await ProductService.getProductById(id);

    if (!product) {
      return NextResponse.json(
        { message: `product with id '${id}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "product fetched successfully", product },
      { status: 200 }
    );
  } catch (error) {
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
