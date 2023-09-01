import { useQuery } from '@tanstack/react-query'
import { viewArticles, viewOneArticle } from '../api/ArticleAPI'

export const useArticle = () => {
    const { data: article, isLoading } = useQuery({
        queryKey: ['articles'],
        queryFn: viewArticles,
        refetchInterval: 1000
    })
    return { article, isLoading }
}


export const useOneArticle = (id: string) => {
    const { data: article, isLoading } = useQuery({
        queryKey: ['articles', { id: id }],
        queryFn: () => viewOneArticle(id),
        refetchInterval: 1000
    })

    return { article, isLoading }
}

