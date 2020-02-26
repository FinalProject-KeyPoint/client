import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { Timeline, List, Avatar, Icon } from 'antd';

export default function HistoryList(props) {

  const [article, setArticle] = useState({})

  const changeDetail = obj => {
    setArticle(obj)
  }

  const redirect = url => {
    window.open(url, '_blank')
  }

  const displayDetail = () => {
    return (
      article._id
      ? <div>
          <p onClick={() => redirect(article.url)}>{article.title}</p>
          <ul>{article.keyPoint.map(point => {
            return <li>{point}</li>
          })}</ul>
          <p onClick={() => props.deleteArticle(article._id)}>Delete</p>
        </div>
      : <p>Please select article to display</p>
    )
  }

  const renderList = (() => {
    // console.log(props.articles)
    return props.articles.map(article => {
      return <Timeline.Item onClick={() => changeDetail(article)} style={{ width: '100%' }} article={article} key={article._id}>
                {article.title}
              </Timeline.Item>
    })
  })

  return (
    <div style={{ marginTop: 50 }}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Timeline mode="right" style={{ width: '50%', display:'flex', alignItems:'flex-start', flexDirection: 'column' }}>
          {renderList()}
        </Timeline>
        <div style={{ width: '50%'}}>
          {displayDetail()}
        </div>
      </div>
    </div>
  )

}