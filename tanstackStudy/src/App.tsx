/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { ButtonHTMLAttributes, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

const containerStyle = css`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Neo둥근모", sans-serif;
  font-weight: 100;
  color: white;
  background-color: black;
`;

const buttonStyle = css`
  width: 50%;
  height: 40px;
  font-size: 30px;
  margin: auto;
  font-family: "Neo둥근모", sans-serif;
  color: white;
  background-color: black;
  border: 1px solid #ffffff;
  cursor: pointer;
  :hover {
    background-color: grey;
    color: black;
  }
`;

const paragraphStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  padding: 60px;
`;

const titleStyle = css`
  font-size: 40px;
  font-weight: bold;
`;

const formBox = css`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  input {
    width: 50%;
    height: 50px;
    margin: auto;
    background-color: black;
    border: 1px solid #ffffff;
    color : white;
    font-size: 20px;
    padding: 5px;
    box-sizing: border-box;
    font-family: "Neo둥근모", sans-serif;
    
  }
`
type inputs = {
  test : string;
  testRequired : string;
}
function App() {
  console.log("렌더링됨");
  const queryClient = useQueryClient();
  const queryKEY: string = "getIMG";
  const NUM = Math.ceil(Math.random() * 300);
  const {register, handleSubmit, watch, formState: {errors}} =useForm()
  const [imgData, setImgData] = useState<string>('');

  const { isLoading, isError } = useQuery({
    queryKey: [queryKEY],
    queryFn: async () => {
      const NUM = Math.ceil(Math.random() * 300);
      const response = await axios.get(`https://picsum.photos/id/400/500/500`, {
        responseType: "blob",
      });
      setImgData(URL.createObjectURL(response.data));
      return URL.createObjectURL(response.data);
    },
     staleTime: 1000 * 60 * 5, // 사용자 정의 기간 동안 데이터를 신선한 상태로 유지
    // cacheTime : 1000 // 데이터가 메모리에 캐시 되어있는 시간
    // statleTime과 cahceTIme의 차이는 서버로 재 요청을 하는지 안하는지의 차이, cacheTime은 캐시에 있는 데이터를 요청해서 받아오는 것이고 staleTime은
    // 즉시 데이터를 반환하는것
    //refetchOnWindowFocus : false, // 사용자가 브라우저 창을 다시 포커스할 때 데이터 페칭, 기본 값 트루
    // refetchInterval: 3000 // 주기적으로 데이터를 재 페칭하는데 사용
  });

  const handleButton = (e: any) => {
    e.preventDefault();
    queryClient.invalidateQueries([queryKEY]);
    console.log("hello");
  };
  
  const deleteButton = (e: any) => {
    e.preventDefault();
    // queryClient.invalidateQueries(['hello']);
    setImgData('');
  };
  
  return (
    <div css={containerStyle}>
      <div css={paragraphStyle}>
        <div css={titleStyle}>tanstackQuery 이미지 페칭 테스트</div>
        <button css={buttonStyle} onClick={e => handleButton(e)}>
          동작
        </button>
        <button css={buttonStyle} onClick={e => deleteButton(e)}>
          제거 동작
        </button>
        {isLoading ? (
          <p>로딩 중...</p>
        ) : isError ? (
          <p>오류 발생!</p>
        ) : (
          <img src={imgData} alt="Random" />
        )}
        <form css={formBox}>
          <input></input>
          <input></input>
          <button css={buttonStyle} onClick={e => handleButton(e)}>
          텍스트 테스트
        </button>
        </form>
      </div>
    </div>
  );
}

export default App;
