import { fromNow } from '../../utils/FormatTools'

export default {
  name: 'ReleaseEvent',
  functional: true,
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  render(h, context) {
    const props = context.props

    return h('div', { staticClass: 'github-event' }, [
      h(
        'svg',
        {
          staticClass: 'event-octicon',
          attrs: {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '16',
            height: '16',
            viewBox: '0 0 14 16'
          }
        },
        [
          h('path', {
            attrs: {
              'fill-rule': 'evenodd',
              d:
                'M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z'
            }
          })
        ]
      ),
      h(
        'div',
        {
          style: 'display: inline-block;',
          staticClass: 'event-text'
        },
        [
          h('a', {
            domProps: {
              innerText: props.event.actor.login
            },
            style: 'text-transform: capitalize;'
          }),
          h('b', { domProps: { innerText: ' released ' } }),
          h('a', {
            staticClass: 'event-link',
            attrs: {
              href: props.event.payload.release.html_url,
              target: '_blank'
            },
            domProps: {
              innerText: props.event.payload.release.name
            }
          })
        ]
      ),
      h('div', {
        staticClass: 'event-time',
        domProps: {
          innerText: fromNow(props.event.created_at)
        }
      })
    ])
  }
}