import { Card } from "../../each/Card"


interface ListCardAble {
    list?: Array<string>
}

export const ListCard = (props: ListCardAble) => {
    return (

        <div className="mt-48 sm:mt-36 flex flex-row flex-wrap ">

            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>

            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>

            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>
            <div className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                <Card />
            </div>

        </div >
    )

}