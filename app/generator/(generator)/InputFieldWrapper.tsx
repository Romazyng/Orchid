'use client'

import InputField from "./InputField"

export default function InputWrapper() {
    return <InputField onGenerate={(text) => console.log('Generated:', text)} />;
}