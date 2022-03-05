import { Card } from "../../each/Card"


interface ListCardAble {
    list?: Array<string>
}

export const ListCard = (props: ListCardAble) => {
    return (

        <div className="mt-36 flex flex-row flex-wrap ">

            <div className="w-48 h-14 shrink mb-72">
                <Card />
            </div>

        </div >
    )

}