import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

export const SweetAlertSuccess = (message) => {
    return Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 2000
    })
}
export const SweetAlertError = (message) => {
    return Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 2000
    })
}

export const SweetAlertWarning = (message) => {
    return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: message,
        showConfirmButton: false,
        timer: 2000
    })
}