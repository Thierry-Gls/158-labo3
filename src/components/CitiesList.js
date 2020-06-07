import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'



class CitiesList extends React.Component {
    render() {
        const { data } = this.props
        const { edges: node } = data.allMongodbMongo158Cities

        return (
            <ul>
                {node &&
                    node.map(({ node: city }) => (
                        <li className="city" key={city.id}>
                            <div>
                                <strong>ID:</strong>
                                <span>{city.mongodb_id}</span>
                            </div>
                            <div>
                                <strong>First name:</strong>
                                <span>{city.firstName}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        )
    }
}

CitiesList.propTypes = {
    data: PropTypes.shape({
        allMongodbMongo158Cities: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query CitiesQuery {
                allMongodbMongo158Cities(limit: 20) {
                    edges {
                        node {
                            id
                            mongodb_id
                            asciiName
                            altNames
                            firstName
                        }
                    }
                }
            }
        `}
        render={(data, count) => <CitiesList data={data} count={count} />}
    />
)
