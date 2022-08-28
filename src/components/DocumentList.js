/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import Document from "./Document";

const DocumentList = (props) => {
  // const dispatch = useDispatch();
  const documentList = useSelector((state)=>state.document.value);
  // useEffect(() => {
  //   getDocument(1, 6)
  //     .then((res) => {
  //     dispatch(setDocs(res.data));
  //     // setIsLoader(false);
  //     console.log(res);
  //   })},[])

  return (
    <div className="flex w-full flex-wrap p-3">
      {documentList.map((document)=> 
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full" key={document.id}>
        <Document document={document} />
      </div>)}
    </div>
  );
};

export default DocumentList;
