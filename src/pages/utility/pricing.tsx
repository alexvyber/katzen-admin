import { useState } from "react"
import { cn, cx } from "cvax"
import { Card, CardHeader, CardContent } from "@/components/ui"
import { Button, Container } from "@/components/ui"

const bgPatterns = [
  `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(165)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M-5 5L5.1 15 15 5l10 10'  stroke-linecap='square' stroke-width='1' stroke='rgba(15, 23,42 , 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
  `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='1' stroke='rgba(15, 23,42 , 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
  `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='59.428' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M0 70.975V47.881m20-1.692L8.535 52.808v13.239L20 72.667l11.465-6.62V52.808zm0-32.95l11.465-6.62V-6.619L20-13.24 8.535-6.619V6.619L20 13.24m8.535 4.927v13.238L40 38.024l11.465-6.62V18.166L40 11.546zM20 36.333L0 47.88m0 0v23.094m0 0l20 11.548 20-11.548V47.88m0 0L20 36.333m0 0l20 11.549M0 11.547l-11.465 6.619v13.239L0 38.025l11.465-6.62v-13.24L0 11.548v-23.094l20-11.547 20 11.547v23.094M20 36.333V13.24'  stroke-linecap='square' stroke-width='1' stroke='rgba(15, 23,42 , 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
  `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M46.231 19.999a5.937 7.48 0 01-5.937 7.48A5.937 7.48 0 0134.357 20a5.937 7.48 0 015.937-7.48 5.937 7.48 0 015.937 7.48zm-40.421 0a5.937 7.48 0 01-5.937 7.48A5.937 7.48 0 01-6.064 20a5.937 7.48 0 015.937-7.48 5.937 7.48 0 015.937 7.48zm20.21 20.285a5.937 7.48 0 01-5.937 7.48 5.937 7.48 0 01-5.936-7.48 5.937 7.48 0 015.936-7.48 5.937 7.48 0 015.937 7.48zm0-40.57a5.937 7.48 0 01-5.937 7.48 5.937 7.48 0 01-5.936-7.48 5.937 7.48 0 015.936-7.48 5.937 7.48 0 015.937 7.48zM-5.732 46.942c1.676-.944 3.556-1.6 5.478-1.587 1.924.011 3.796.69 5.463 1.653 1.668.962 3.156 2.202 4.637 3.434 1.48 1.233 2.97 2.471 4.641 3.428 1.67.957 3.547 1.627 5.47 1.627 1.924 0 3.8-.67 5.47-1.627s3.161-2.195 4.642-3.428c1.48-1.232 2.968-2.472 4.636-3.434 1.667-.963 3.54-1.642 5.463-1.653 1.922-.012 3.802.643 5.479 1.587V33.628c-1.677.944-3.557 1.6-5.479 1.587-1.923-.011-3.796-.69-5.463-1.653-1.668-.962-3.156-2.202-4.636-3.434-1.48-1.233-2.971-2.471-4.642-3.428-1.67-.957-3.546-1.627-5.47-1.627-1.923 0-3.8.67-5.47 1.627s-3.161 2.195-4.641 3.428c-1.48 1.232-2.97 2.472-4.637 3.434-1.667.963-3.54 1.641-5.463 1.653-1.922.012-3.802-.643-5.478-1.587zM45.647-6.943c-1.677.944-3.557 1.6-5.479 1.587-1.923-.011-3.796-.69-5.463-1.653-1.668-.962-3.156-2.202-4.636-3.434-1.48-1.233-2.971-2.471-4.642-3.428-1.67-.957-3.546-1.627-5.47-1.627-1.923 0-3.8.67-5.47 1.627s-3.161 2.195-4.641 3.428c-1.48 1.232-2.97 2.472-4.637 3.434-1.667.963-3.54 1.642-5.463 1.653-1.922.012-3.802-.643-5.478-1.587V6.372c1.676-.944 3.556-1.6 5.478-1.587 1.924.012 3.796.69 5.463 1.653C6.877 7.4 8.365 8.64 9.846 9.872c1.48 1.233 2.97 2.471 4.641 3.428 1.67.957 3.547 1.627 5.47 1.627 1.924 0 3.8-.67 5.47-1.627s3.161-2.195 4.642-3.428c1.48-1.232 2.968-2.472 4.636-3.434 1.667-.963 3.54-1.642 5.463-1.653 1.922-.012 3.802.643 5.479 1.587z'  stroke-width='1' stroke='rgba(15, 23,42 , 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
]

type PricingPlan = "yearly" | "monthly"
type Pricing = {
  title: string
  price: {
    [key in PricingPlan]: number
  }
  buttonText: string
  bgClassName: string
  ribon?:
    | undefined
    | {
        title: string
        className: string
      }
}

const pricing: Pricing[] = [
  {
    title: "Advanced",
    price: {
      yearly: 96,
      monthly: 26,
    },
    buttonText: "Buy now",
    bgClassName: "bg-warning-50",
  },
  {
    title: "Business",
    price: {
      yearly: 196,
      monthly: 20,
    },
    buttonText: "Buy now",
    bgClassName: "bg-info-50",
    ribon: {
      title: "Most popular",
      className: "bg-info-300",
    },
  },
  {
    title: "Basic",
    price: {
      yearly: 26,
      monthly: 16,
    },
    buttonText: "Try it free",
    bgClassName: "bg-success-50",
  },
  {
    title: "Got a large team?",
    price: {
      yearly: 126,
      monthly: 16,
    },
    buttonText: "Request a quote",
    bgClassName: "bg-primary-50",
  },
]

const PricingPage = () => {
  const [pricingPlan, setPricingPlan] = useState<PricingPlan>("yearly")

  const toggle = () => {
    setPricingPlan((state) => (state === "yearly" ? "monthly" : "yearly"))
  }

  return (
    <Container className="relative">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 justify-between xs:flex-row">
            <h4 className="text-xl font-medium text-slate-900">Packages</h4>
            <label className="inline-flex text-sm cursor-pointer">
              <input type="checkbox" onChange={toggle} hidden />
              <span
                className={cx(
                  "rounded px-[18px] py-1 transition duration-100",
                  pricingPlan === "yearly"
                    ? "bg-slate-900 text-white dark:bg-slate-900"
                    : "dark:text-slate-300"
                )}
              >
                Yearly
              </span>
              <span
                className={cx(
                  "rounded px-[18px] py-1 transition duration-100",
                  pricingPlan === "monthly"
                    ? "bg-slate-900 text-white dark:bg-slate-900"
                    : "dark:text-slate-300"
                )}
              >
                Monthly
              </span>
            </label>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((item, index) => (
              <PricingCard
                key={index}
                {...item}
                price={`$${pricingPlan === "yearly" ? item.price.yearly : item.price.monthly}`}
                bgPattern={bgPatterns[index]}
                saving={
                  pricingPlan === "yearly"
                    ? `Save ${Math.floor((item.price.monthly / item.price.yearly) * 100)}%`
                    : undefined
                }
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  )
}

function PricingCard({
  ribon,
  title,
  price,
  buttonText,
  bgClassName,
  saving,
  bgPattern,
}: {
  title: string
  price: string
  saving?: string
  bgClassName?: string
  buttonText: string

  ribon?:
    | undefined
    | {
        className?: string
        title: string
      }

  bgPattern?: string
}) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-xl p-6  text-slate-900  dark:text-white z-10"
      )}
    >
      {ribon && (
        <div
          className={cn(
            "absolute top-7 rotate-45 -right-10 py-2 px-10 text-sm font-medium text-center text-white transform bg-slate-300 z-30",
            ribon.className
          )}
        >
          {ribon.title}
        </div>
      )}

      <div>
        <header className="mb-6">
          <h4 className="mb-5 text-xl">{title}</h4>
          <div className="flex relative items-center mb-5 space-x-4 rtl:space-x-reverse">
            <span className="font-medium leading-10 text-[32px]">{price}</span>

            {saving && (
              <span className="inline-block py-1 px-3 text-sm font-semibold uppercase bg-white rounded-xl border text-slate-800">
                {saving}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-300">per user/month, annually</p>
        </header>
        <div className="z-20 space-y-8 price-body">
          <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
            Designed for teams who need to manage complex workflows with more automation and
            integration.
          </p>
          <div>
            <Button className="w-full dark:border-slate-400">{buttonText}</Button>
          </div>
        </div>

        <div
          className={cx("absolute top-0 right-0 w-full h-full -z-10 opacity-5")}
          style={{
            backgroundImage: bgPattern,
          }}
        />
        <div className={cx("absolute top-0 right-0 w-full h-full -z-20 ", bgClassName)} />
      </div>
    </div>
  )
}

export default PricingPage
