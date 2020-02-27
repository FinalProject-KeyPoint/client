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
  }, [date, dispatch])

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  }

  const handleFilter = (dateString) => {
    setDate(dateString)
  }
  
  return (
    <div className="dashboardContainer">
      <p className="historyText">Check your reading history</p>
      <DateForm filterArticles={handleFilter} />
      <HistoryList articles={localArticles} deleteArticle={handleDelete} date={date} />      
    </div>
  )

}

