import React, { useEffect } from 'react'
import HistoryList from '../components/HistoryList'
import '../style/dashboard.css'
import { deleteArticle, fetchArticles } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Dashboard() {
  
  const dispatch = useDispatch()
  const localArticles = useSelector(state => state.articles.articles)
  
  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  }

  return (
    <>
      <HistoryList articles={localArticles} deleteArticle={handleDelete} />      
    </>
  )

}

