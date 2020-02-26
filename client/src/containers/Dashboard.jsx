import React, { useEffect, useState } from 'react'
import HistoryList from '../components/HistoryList'
import '../style/dashboard.css'
import { deleteArticle, fetchArticles } from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import DateForm from '../components/DateForm'
import moment from 'moment'

export default function Dashboard() {
  
  const dispatch = useDispatch()
  const localArticles = useSelector(state => state.articles.articles)
  const [date, setDate] = useState(moment().format().split('T')[0])

  useEffect(() => {
    dispatch(fetchArticles(date))
  }, [date])

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  }

  const handleFilter = (dateString) => {
    setDate(dateString)
  }
  
  return (
    <>
      <DateForm filterArticles={handleFilter}/>
      <p>{moment(date).format("MMM Do YYYY")}</p>
      <HistoryList articles={localArticles} deleteArticle={handleDelete} />      
    </>
  )

}

