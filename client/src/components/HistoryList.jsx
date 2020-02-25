import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { Timeline, List, Avatar, Icon } from 'antd';
import { useDispatch } from 'react-redux'
import { deleteArticle } from '../store/actions'

export default function HistoryList(props) {

  const dispatch = useDispatch()
  // dispatch(deleteArticle(id))
  // _id
  // createdAt
  // url
  // keyPoint

  const renderList = (() => {
    return props.articles.map(article => {
      return <Timeline.Item style={{ width: '100%' }} article={article} key={article._id}>
                {article.url} - {article.createdAt}
              </Timeline.Item>
    })
  })

  return (
    <div style={{ marginTop: 50 }}>
      {/* search box for date */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Timeline mode="right" style={{ width: '50%', display:'flex', alignItems:'flex-start', flexDirection: 'column' }}>
          {renderList()}
        </Timeline>
        <div style={{ width: '50%'}}></div>
      </div>
    </div>
  )

}