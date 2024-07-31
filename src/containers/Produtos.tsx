import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  {
    if (isLoading)
      return (
        <S.Loading>
          <h1>« CARREGANDO »</h1>
        </S.Loading>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: any) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
