import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { Empty, Button, Affix } from 'antd';
import moment from 'moment'
import { useSelector } from 'react-redux'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
      ? <div className="articleDetail" style={{ position: 'sticky', top: '1%' }}>
          <Button onClick={() => redirect(article.url)} type="link" style={{ margin: 'auto' }} block>
            {article.title}
          </Button>
          <ul style={{ width: '90%', margin: 'auto' }}>{article.keyPoint.map(point => {
            return <li style={{ fontSize: 14, margin: '2 0' }}>{point}</li>
          })}</ul>
          <Button style={{ backgroundColor: 'coral', color: 'snow', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', margin: 'auto' }} block onClick={() => onDelete(article._id)}>Delete</Button>
        </div>
      : <p style={{ margin: 'auto', width: '300px', fontSize: 18, position: 'sticky', top: '30%' }}>Please select article to display</p>
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
        return <VerticalTimelineElement
                  contentStyle={{ background: 'lightsalmon', color: 'darkslategray', width: 200 }}
                  contentArrowStyle={{ borderRight: '7px solid lightsalmon' }}
                  date={moment(article.createdAt).format('LT')}
                  iconStyle={{ background: 'lightsalmon', color: 'darkslategray' }}
                  article={article} key={article._id}
                  iconOnClick={() => changeDetail(article)}
                >
                  <p
                    onClick={() => changeDetail(article)}
                    style={{ cursor: 'pointer' }}
                  >
                    {getTitle(article.title)}
                  </p>
                </VerticalTimelineElement>
      })
    } else {
      return <Empty imageStyle={{ height: 250, width: 250 }} style={{ margin: 'auto' }} />
    }
  })

  return (
    <div className="historyList">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ margin: 'auto', width: '60%' }}>
          <p style={{ fontWeight: 800, fontSize: '2rem', textAlign: 'center' }}>
            {moment(props.date).format("MMM Do YYYY")}
          </p>
          <VerticalTimeline style={{ }}>
            {renderList()}
          </VerticalTimeline>
        </div>
          <div style={{ width: '40%' }}>
            {displayDetail()}
          </div>
      </div>
    </div>
  )

}