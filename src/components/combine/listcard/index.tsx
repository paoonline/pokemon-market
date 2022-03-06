import { useContext } from "react"
import { InitContext } from "../../../store"
import { Card } from "../../each/Card"

export const ListCard = (): JSX.Element => {
    const InitContextCart = useContext(InitContext)

    const { CardList } = InitContextCart
    return (

        <div className="mt-48 sm:mt-36 flex flex-row flex-wrap ">

            {CardList.map((res, i: number): JSX.Element =>
                <div key={res.id + '_' + i} className="w-full sm:w-48 h-14 shrink mb-83 sm:mb-64">
                    <Card list={res} />
                </div>
            )}
        </div >
    )

}