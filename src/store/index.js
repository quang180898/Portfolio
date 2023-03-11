import { createStore } from 'redux';
import reducer from './common/reducer';

export default function createStoreReducer() {
    const store = createStore(reducer); // Khởi tạo store
    return store
} 

