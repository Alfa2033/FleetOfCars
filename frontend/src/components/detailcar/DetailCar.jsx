import Utils from "../../utils/Utils"

const Detail = (infoCar) => {
    if (infoCar.detail === null) {
        return null
    }

    return (
        <div id="modal_detail" className='modal fade' data-backdrop="static" data-keyboard="false" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Información del vehiculo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Marca del vehiculo: </label>
                                <label>{infoCar.detail.trademark}</label>
                            </div>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Año: </label>
                                <label>{infoCar.detail.year}</label>
                            </div>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Estado actual: </label>
                                <label>{infoCar.detail.stateInfo.description_status}</label>
                            </div>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Placas: </label>
                                <label>{infoCar.detail.license_plate}</label>
                            </div>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Modelo: </label>
                                <label>{infoCar.detail.model}</label>
                            </div>
                            <div className='form-group'>
                                <label className="font-weight-bold mr-2">Fecha de registro: </label>
                                <label>{Utils.TranformDateMX(infoCar.detail.createdAt)}</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail