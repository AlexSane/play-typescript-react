// Comment to get more information during initialization
logLevel := Level.Warn

// The Typesafe repository 
resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

// Use the Play sbt plugin for Play projects
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.2.3")

resolvers += "Sonatype OSS Snapshots Repository" at "http://oss.sonatype.org/content/groups/public"

addSbtPlugin("com.github.mumoshu" % "play2-typescript" % "0.3.0-RC1" changing())