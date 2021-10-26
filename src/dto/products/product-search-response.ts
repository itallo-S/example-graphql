export interface ProductSearchtResponse {
  content: products[]
}

export interface products {
  product: productInfo,
  prices: priceInfo[]
}

interface productInfo {
  name: string
  code: string
  brand: brandInfo
  images: imageInfo[]
}

interface brandInfo {
  name: string
}

interface imageInfo {
  url: string
}

interface priceInfo {
  bestPrice: priceValue
}

interface priceValue {
  totalPrice: string
}






