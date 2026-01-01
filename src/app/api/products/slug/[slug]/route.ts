import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";
import { handleCommonErrors } from "@/utils/errorHandler";

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
    return handleCommonErrors(error);
  }
}
