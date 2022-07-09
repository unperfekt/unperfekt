export const getComponents = async () => {
  const components = await Promise.all(
    Object.entries(
      import.meta.glob(
        "../../../node_modules/unperfekt/src/components/*/docs/*.svx",
      ),
    ).map(([_path, resolver]) => {
      return resolver()

      // return { metadata, default } as ComponentMarkdown
    }),
  )

  return components as unknown[]
}
