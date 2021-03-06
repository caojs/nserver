import cn from 'classnames'
import fecha from 'fecha'
import slugify from 'voca/slugify'
import styled from 'styled-components'
import Link from 'next/link'
import { FiChevronsRight } from 'react-icons/fi';

import { fillPath } from '~/utils/images'

const Wrapper = styled.div`
  display: flex;
  border-radius: 6px;
  box-shadow: 0 0 1rem 0 rgba(10,10,10,.04);
  transition: all .5s ease;
  overflow: hidden;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
`;

const Figure = styled.figure`
  &&& {
    overflow: hidden;
    img {
      top: 50%;
      left: 50%;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
`;

const A = styled.a`
  color: #333;
  transition: color 0.2s ease;
  :hover {
    color: #218fe6;
  }
`;

const Title = styled.h3`
  &&& {
    margin-bottom: 0.4rem;
    font-weight: 400;
  }
`;

const Time = styled.time`
  display: block;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
`;

const RMA = styled(A)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  
  svg {
    font-size: 1rem; 
    margin-bottom: -3px;
    margin-left: 4px;
    transition: margin 0.2s ease;
  }

  :hover {
    svg {
      margin-left: 6px;
    }
  }
`;

export default function NewsItem(props) {
  const {
    className,
    id,
    title,
    description,
    thumbnail,
    created_at
  } = props;

  const createdAt = fecha.format(new Date(created_at), 'mediumDate');

  const as = `/news/${slugify(title)}.${id}`

  const href = {
    pathname: '/news-detail',
    query: {
      slug: `${slugify(title)}.${id}`
    }
  }

  return (
    <Wrapper className={cn(className)}>
      <Card className="card">
        {thumbnail && <div className="card-image">
          <Figure className="image is-5by3">
            <img src={fillPath(thumbnail.url)} alt="thumbnail image"/>
          </Figure>
        </div>}
        <div className="card-content">
          <div className="content">
            <Title>
              <Link as={as} href={href}>
                <A>{title}</A>
              </Link>
            </Title>
            <Time className="has-text-grey-light" dateTime={createdAt}>{createdAt}</Time>
            <p>{description}</p>
            <Link as={as} href={href}>
              <RMA>Đọc thêm <FiChevronsRight/></RMA>
            </Link>
          </div>
        </div>
      </Card>
    </Wrapper>
  )
}