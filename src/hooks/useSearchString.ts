import {useDispatch, useSelector} from 'react-redux';
import {setSearchString} from '../slices/searchStringSlice';

import {Dispatch, RootState} from '../store';

/**
 * @callback dispatchSetSearchStringCallback
 * @param {string} string New search string.
 * @return void
 */

/**
 * Hook for checking and setting the current search string value.
 * @return {[string, dispatchSetSearchStringCallback]}
 */
export default function() {
  const selector = useSelector((state: RootState) => state.searchString.value);
  const dispatch = useDispatch<Dispatch>();
  const dispatchSetSearchString = (newString: string) => {
    dispatch(setSearchString(newString));
  };
  return [
    selector,
    dispatchSetSearchString,
  ] as [
    typeof selector,
    typeof dispatchSetSearchString,
  ];
}
