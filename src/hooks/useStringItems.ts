import {useDispatch, useSelector} from 'react-redux';
import {addStringItem} from '../slices/stringItemsSlice';

import {Dispatch, RootState} from '../store';

/**
 * @callback dispatchAddStringCallback
 * @param {string} string New string to add.
 * @return void
 */

/**
 * Hook for checking and setting the added strings.
 * @return {[string, dispatchAddStringCallback]}
 */
export default function() {
  const selector = useSelector((state: RootState) => state.stringItems.value);
  const dispatch = useDispatch<Dispatch>();
  const dispatchAddString = (newString: string) => {
    dispatch(addStringItem(newString));
  };
  return [
    selector,
    dispatchAddString,
  ] as [
    typeof selector,
    typeof dispatchAddString,
  ];
}
