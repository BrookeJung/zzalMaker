import React from "react";

const Form = ({ updateMainCat }) => {
    const [inputText, setInputText] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleInputChange = (event) => {
        const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
        if (includesHangul(event.target.value)) {
            setErrorMessage("한글은 입력할 수 없습니다.");
            return;
        }
        setInputText(event.target.value.toUpperCase());
        setErrorMessage("");
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");
        if (inputText === "") {
            setErrorMessage("빈 값으로 만들 수 없습니다.");
            return;
        }
        updateMainCat(inputText);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={inputText}
                    placeholder="영어 대사를 입력해주세요"
                />
                <button type="submit">생성</button>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
        </>
    );
}

export default Form;