/* eslint-disable react/prop-types */
import { useState } from "react"
import ServiceDelete from "./ServiceDelete"
import Utils from "../../utils/Utils"

const Delete = ({ idToDelete, callback }) => {
    const [ok, setOk] = useState(Utils.StringEmpty)
    const [error, setError] = useState(Utils.StringEmpty)

    const DeleteCar = async () => {
        const deleteCar = await ServiceDelete.DeleteCar(idToDelete)
        if (deleteCar.IsOk === false) {
            setError(deleteCar.MessageOperation)
            return
        }

        setOk(deleteCar.MessageOperation)
        callback()
    }

    return (
        <div id="modal_delete" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Eliminar vehiculo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>¿Desea eliminar el vehiculo?</p>
                    </div>
                    <div className="mb-3 text-center">
                        <span className="d-block text-danger">{error}</span>
                        <span className="d-block text-success">{ok}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button id="btn_deleteCar" type="button" className="btn btn-primary" data-dismiss="modal" onClick={DeleteCar}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete