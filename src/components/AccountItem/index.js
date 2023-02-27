import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/244942369_4538160789574499_6686355400691637006_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=v30uowQlfTMAX8nF78N&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfD59KGK-QVF8mk65MDWUOMcNmQBEwABEKX6eLWO-TJQrg&oe=6401E44B"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyễn Hoàng Việt</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>NguyễnHoàngViệt</span>
      </div>
    </div>
  );
}

export default AccountItem;
