
interface produtoteste {
  name: string
  description: string,
}

interface priceobjeto {
  value: number
}

interface produtoprice {
  price: priceobjeto
}

interface teste {
  product: produtoteste,
  prices: produtoprice[]
}

export interface ProductResponse {
  logotype: string;

  codes: string[];

  content: teste[]
  
}
