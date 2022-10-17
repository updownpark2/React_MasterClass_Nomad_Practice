import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CAll } from "../apis";

interface CoinAPi {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

export default function Home() {
  //const useState()그리고 useeffect로 해도 되는데 더 좋은 라이브러리
  //usequery가있다.
  const { isLoading, data } = useQuery<CoinAPi[]>("COIN", CAll);
  const filtereddata = data?.filter((item, index) => index < 12);
  const Box = styled.div``;
  const Title = styled.h3`
    font-size: 48px;
    color: yellow;
  `;
  const Ul = styled.ul`
    align-items: center;
  `;
  const Li = styled.li`
    margin-top: 10px;
  `;
  const Load = styled.h3`
    font-size: 48px;
    color: red;
  `;

  return (
    <Box>
      <Title>코인!!</Title>

      {isLoading ? (
        <Load>로딩중입니다ㅎㅎ</Load>
      ) : (
        filtereddata?.map((item) => (
          <Li key={item.id}>
            <Link to={{ pathname: `/${item.id}`, state: { name: item.name } }}>
              {item.name}
            </Link>
          </Li>
        ))
      )}
    </Box>
  );
}
