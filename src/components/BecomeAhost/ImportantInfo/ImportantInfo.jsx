import React, {useState} from "react";
import s from "./ImportantInfo.module.css"


const ImportantInfo = () => {
    
    return (
        <p className={ s.important }><span className={ s.alert }>Важная информация.</span> Соблюдайте <a href="#">местное законодательство</a>, а также ознакомьтесь с <a href="#">Политикой недискриминации KONOO</a> и информацией о <a href="#">сборах с гостей и хозяев</a>. Установите <a href="#">правила отмены</a> после публикации объявления.</p>
        )
}

export default ImportantInfo;