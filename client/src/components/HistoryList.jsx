import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { Timeline, Empty, Button } from 'antd';
import moment from 'moment'
import { useSelector } from 'react-redux'

export default function HistoryList(props) {

  const articles = useSelector(state => state.articles.articles)
  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle({})
  }, [articles])

  const changeDetail = obj => {
    setArticle(obj)
  }

  const redirect = url => {
    window.open(url, '_blank')
  }

  const onDelete = (id) => {
    props.deleteArticle(id)
    setArticle({})
  }

  const displayDetail = () => {
    return (
      article._id
      ? <div className="articleDetail">
          <Button onClick={() => redirect(article.url)} type="link" style={{ margin: 'auto' }} block>
            {article.title}
          </Button>
          <ol>{article.keyPoint.map(point => {
            return <li>{point}</li>
          })}</ol>
          <Button type="danger" block onClick={() => onDelete(article._id)}>Delete</Button>
        </div>
      : <p style={{ margin: 'auto', width: '300px', fontSize: 18 }}>Please select article to display</p>
    )
  }

  const getTitle = (title) => {
    return (
      title.length > 100
      ? title.substring(0, 100).concat('...')
      : title
    )
  }

  const renderList = (() => {
    if (articles.length) {
      return props.articles.map(article => {
        return <Timeline.Item onClick={() => changeDetail(article)} style={{ width: '100%', cursor: 'pointer' }} className="articleItem" article={article} key={article._id}>
                  <p>{getTitle(article.title)} - <strong>{moment(article.createdAt).format('LT')}</strong></p>
                </Timeline.Item>
      })
    } else {
      return <Empty imageStyle={{ height: 250, width: 250 }} style={{ margin: 'auto' }} />
    }
  })

  return (
    <div style={{ marginTop: 50 }} className="historyList">
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Timeline mode="right" style={{ width: '50%', display:'flex', alignItems:'flex-start', flexDirection: 'column' }} className="articlesList">
          {renderList()}
        </Timeline>
        <div style={{ width: '50%', marginLeft: 15 }}>
          {displayDetail()}
        </div>
      </div>
    </div>
  )

}