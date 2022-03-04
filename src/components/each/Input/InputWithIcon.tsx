interface InputAble {
    light?: boolean
    callback?: (data: object) => object
}
export const InputWithIcon = (props: InputAble): JSX.Element => {
    const checkConditionLight = props.light ? 'white' : '#393C49'
    return (
        <div className="relative text-white focus-within:text-white">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input style={{ border: `1px solid ${checkConditionLight}`, background: 'transparent', width: '100%' }} type="search" name="q" className="py-2 text-sm text-white rounded-md pl-8 pr-2 focus:outline-none  focus:text-white" placeholder="Search by Name" autoComplete="off" />
        </div>
    )
}