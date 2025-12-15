# bocum-not-paid-js

A JavaScript library to apply payment overdue warnings to web applications. When a payment deadline is missed, it applies an overlay opacity and displays a warning banner.

## Installation

```bash
npm install bocum-not-paid-js
```

## Usage

### Basic Usage

```javascript
import { bocumNotPaid } from 'bocum-not-paid-js'

bocumNotPaid({
  deadline: '2025-01-31',
  opacity: 0.3,
  message: '🚨 Invoice overdue. Please settle payment.',
  graceDays: 3,
})
```

### Plain HTML

```html
<script type="module">
  import { bocumNotPaid } from 'https://cdn.jsdelivr.net/npm/bocum-not-paid-js'

  bocumNotPaid({
    deadline: '2025-01-01',
    message: 'Please settle your invoice 🙏',
  })
</script>
```

### React / Next.js

```javascript
import { useEffect } from 'react'
import { bocumNotPaid } from 'bocum-not-paid-js'

function App() {
  useEffect(() => {
    bocumNotPaid({
      deadline: process.env.NEXT_PUBLIC_PAYMENT_DEADLINE,
      graceDays: 5,
    })
  }, [])

  return <div>Your app content</div>
}
```

## API

### `bocumNotPaid(options)`

#### Options

- `deadline` (string, required): Payment deadline date in any format accepted by `new Date()`
- `opacity` (number, optional): Body opacity when overdue (default: `0.4`)
- `graceDays` (number, optional): Number of grace days after deadline (default: `0`)
- `message` (string, optional): Warning message to display (default: `'Payment overdue'`)

#### Behavior

1. Gets the current date
2. Compares it with the deadline plus grace days
3. If overdue:
   - Applies CSS opacity to the body
   - Disables pointer events on the body
   - Shows a fixed warning banner at the top
   - The banner remains interactive (can be clicked if needed)

## Example Scenarios

```javascript
// Basic warning
bocumNotPaid({
  deadline: '2025-01-15'
})

// With custom styling and grace period
bocumNotPaid({
  deadline: '2025-02-01',
  opacity: 0.3,
  graceDays: 7,
  message: '⚠️ Your subscription payment is overdue. Please update your payment method.'
})

// Environment-based configuration
bocumNotPaid({
  deadline: process.env.PAYMENT_DEADLINE || '2025-12-31',
  message: process.env.OVERDUE_MESSAGE || 'Payment required'
})
```

## License

MIT
