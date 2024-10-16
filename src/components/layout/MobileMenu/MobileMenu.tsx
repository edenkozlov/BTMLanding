import cx from 'classnames'
import { useContext } from 'react'
import Image from 'next/image'
import { StateContext } from '@/state'
import { Icon } from '@/components/kit'

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useContext(StateContext)

  return (
    <section
      className={cx('mobile-menu', isMobileMenuOpen && 'mobile-menu--opened')}
    >
      <div>
        <header className="mobile-menu__header">
          <button
            type="button"
            className="mobile-menu__close"
            onClick={closeMobileMenu}
          >
            <Icon icon="close" />
          </button>

          <a
            href=""
            className="mobile-menu__docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Docs</span>
            <Image
              src="/images/icons/external.svg"
              alt="External link"
              width="16"
              height="16"
            />
          </a>
        </header>

        <h3 className="mobile-menu__title">Products</h3>

        <ul className="mobile-menu__products">
          <li className="mobile-menu__product menu-product">
            <a
              href=""
              className="menu-product__wrapper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="menu-product__info">
                <h4 className="menu-product__title">BTM protocol</h4>
                <p className="menu-product__description">Visit our app</p>
              </div>
              <Image
                src="/images/icons/external.svg"
                alt="External link"
                width="16"
                height="16"
              />
            </a>
          </li>
        </ul>

        <ul className="mobile-menu__socials">
          <li>
            <a
              className="mobile-menu__social-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="twitter" width={24} height={24} />
              <span className="visually-hidden">Twitter</span>
            </a>
          </li>
          <li>
            <a
              className="mobile-menu__social-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="medium" width={24} height={24} />
              <span className="visually-hidden">Medium</span>
            </a>
          </li>
        </ul>
      </div>

      <a
        href="https://google.com"
        className="mobile-menu__launch-button"
        target="_blank"
        rel="noreferrer"
      >
        Launch dApp
      </a>
    </section>
  )
}

export { MobileMenu }
