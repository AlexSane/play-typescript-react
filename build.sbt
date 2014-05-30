import play.Project._ 

name := "play-reactjs-typescript"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache
)     

playScalaSettings

typescriptSettings

tsOptions ++= Seq("--sourcemap")

requireJs += "config.js"

requireJsShim += "config.js"