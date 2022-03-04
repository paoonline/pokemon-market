interface TextProps {
    size: string,
    color: string,
    text: string,
}

export const Text = (props: TextProps):JSX.Element =>  {
    return (
        <p>{props.text}</p>
    )
}