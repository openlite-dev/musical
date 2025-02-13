import { Link, Stack } from 'expo-router'

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Opps!' }} />
      <Link href="/">Go To home</Link>
    </>
  )
}
