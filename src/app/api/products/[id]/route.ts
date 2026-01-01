import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { ProductService } from "@/services/product.service";
import { verifyAdmin } from "@/utils/auth-guard";
import { handleCommonErrors } from "@/utils/errorHandler";

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
    return handleCommonErrors(error);
  }
}

/**
 * PUT /api/products/[id]
 * Updates a product (Admin Only)
 */
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    // 1. Security Check
    verifyAdmin(req);

    await connectDB();
    const { id } = await params;
    const data = await req.json();

    // 2. Service Call
    const updatedProduct = await ProductService.updateProduct(id, data);

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    return handleCommonErrors(error);
  }
}

/**
 * DELETE /api/products/[id]
 * Deletes a product (Admin Only)
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    // 1. Security Check
    verifyAdmin(req);

    await connectDB();
    const { id } = await params;

    // 2. Service Call
    const deletedProduct = await ProductService.deleteProduct(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return handleCommonErrors(error);
  }
}
