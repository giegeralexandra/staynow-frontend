export function fetchReservations() {
    return (dispatch) => {
        console.log('inside fetch reservations')
        fetch('http://localhost:3000/api/v1/reservations')
        .then(res => res.json())
        .then(reservations => dispatch({
            type: 'FETCH_RESERVATIONS',
            payload: reservations
        }))
    }
}