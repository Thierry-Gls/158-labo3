import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'



class RecordsList extends React.Component {
    render() {
        const { data } = this.props
        const { edges: node } = data.allMongodbMongo158IpRecords

        return (
            <ul>
                {node &&
                    node.map(({ node: record }) => (
                        <li className="record" key={record.id}>
                            <div>
                                <strong>ID:</strong>
                                <span>{record.mongodb_id}</span>
                            </div>
                            <div>
                                <strong>IP:</strong>
                                <span>{record.ip}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        )
    }
}

RecordsList.propTypes = {
    data: PropTypes.shape({
        allMongodbMongo158IpRecords: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query RecordsQuery {
                allMongodbMongo158IpRecords(limit: 20) {
                    edges {
                        node {
                            id
                            badCrawlManCount
                            autoSearchCount
                            blackErrorCount
                            cityGuess
                            cityGuessSafe
                            mongodb_id
                            countryGuess
                            crawlCount
                            crawlManCount
                            grayErrorCount
                            hackManCount
                            ip
                            isAdmin
                            languageTag
                            lastAccessTime
                            loginFailedCount
                            passFailedCount
                            passFailedLockableCount
                            passFailedTotalCount
                            passRecoveryCount
                            whiteErrorCount
                            version
                            userAgent
                            searchPageCount
                            searchCount
                            robotGoodHitsCount
                            robotBadHitsCount
                            errorHistory {
                                uri
                            }
                        }
                    }
                }
            }
        `}
        render={(data, count) => <RecordsList data={data} count={count} />}
    />
)
