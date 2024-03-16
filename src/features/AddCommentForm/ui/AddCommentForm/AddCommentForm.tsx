import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Loader, UTButton, UTInput } from 'shared/ui';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice';
import { getCommentLoading, getCommentText } from '../../model/selectors/comment';
import { DynamicModuleLoader, ReducersList, useActionCreators } from 'shared/lib';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (txt: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer, 
}; 

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const { setText } = useActionCreators(addCommentFormActions);
  const text = useSelector(getCommentText);
  const loading = useSelector(getCommentLoading);
	
  const onChangeCommentValue = useCallback((value: string) => {
    setText(value);
  }, [setText]);

  const onSendCommentHandler = useCallback(() => {
      onChangeCommentValue('');
      onSendComment(text);
  }, [onChangeCommentValue, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])} >
        <UTInput
          placeholder={t('input_comment')}
          onChange={onChangeCommentValue}
          className={cls.input}
          value={text}
        />
        {loading && <Loader className={cls.loader} />}
        <UTButton onClick={onSendCommentHandler}>{t('send_comment')}</UTButton>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
