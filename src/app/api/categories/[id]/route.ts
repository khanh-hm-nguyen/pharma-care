import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import { CategoryService } from "@/services/category.service";
import { verifyAdmin } from "@/utils/auth-guard";
import { handleCommonErrors } from "@/utils/errorHandler";

type RouteParams = { params: Promise<{ id: string }> };

/**
 * POST /api/categories/[id]
 * Admin Only: update category
 */
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    verifyAdmin(req);
    await connectDB();
    
    const { id } = await params;
    const data = await req.json();

    const updated = await CategoryService.updateCategory(id, data);
    
    if (!updated) {
        return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category updated", category: updated });
  } catch (error) {
    return handleCommonErrors(error);
  }
}


/**
 * POST /api/categories/[id]
 * Admin Only: delete category
 */
export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    verifyAdmin(req);
    await connectDB();
    
    const { id } = await params;
    
    // check if products exist in this category before deleting?
    const deleted = await CategoryService.deleteCategory(id);

    if (!deleted) {
        return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category deleted" });
  } catch (error) {
    return handleCommonErrors(error);
  }
}