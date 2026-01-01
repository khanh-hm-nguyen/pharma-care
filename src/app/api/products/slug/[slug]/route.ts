import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";

type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * GET /api/slug/[slug]
 * Fetches a single product by its URL slug
 * Example: GET /api/slug/panadol-extra-optizorb
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    await connectDB();

    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json(
        { message: "Invalid or missing slug parameter" },
        { status: 400 }
      );
    }

    const product = await ProductService.getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        { message: `Product with slug '${slug}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product fetched successfully", product },
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
