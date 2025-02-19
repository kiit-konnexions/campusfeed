import { Card, CardBody, CardHeader, Form } from '@heroui/react'

const PublisherPage = () => {
  return (
    <div className="min-h-screen w-full py-16 px-4 bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5]">
      <Card className="w-full p-6 max-w-4xl mx-auto backdrop-blur-sm bg-white/80 rounded-2xl shadow-2xl">
        <CardHeader className="space-y-1">
          <h1 className="text-2xl flex items-center gap-2">
            Campus Feed
            <span className="text-base font-normal text-muted-foreground ml-2">Details Form</span>
          </h1>
        </CardHeader>
        <CardBody>
          <Form className="space-y-8 h-[400px]">
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default PublisherPage