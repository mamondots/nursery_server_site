import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInfoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductInfoDB = async (query: Record<string, unknown>) => {
  //search query
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchAbleFields = ['title', 'category', 'size'];
  const searchQuery = Product.find({
    $or: searchAbleFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //filter query
  const queryObj = { ...query };

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page'];

  excludeFields.forEach((el) => delete queryObj[el]);

  const filterQuery = searchQuery.find(queryObj);

  //sort query
  let sort = '-createdAt';

  if (query.sort) {
    sort = query.sortBy as string;
  }

  const sortQuery = filterQuery.sort(sort);

  //limit and paginision query
  let limit = 1;
  let page = 1;
  let skip = 0;

  if (query.limit) {
    limit = Number(query.limit);
  }

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = await paginateQuery.limit(limit);

  return limitQuery;
};

const getSingleProductInfoBD = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductInfoBD = async (
  id: string,
  updateProduct: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(id, updateProduct, {
    new: true,
  });
  return result;
};

const deleteSingleProductInfoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProductInfoDB,
  getAllProductInfoDB,
  getSingleProductInfoBD,
  deleteSingleProductInfoDB,
  updateSingleProductInfoBD,
};
