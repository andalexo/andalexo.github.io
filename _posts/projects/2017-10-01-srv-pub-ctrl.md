---
layout: page-fullwidth
subheadline:  "CERN"
title:  "Server Publisher Controller"
teaser: "It would be nice to deploy servers and publishers easier, only implementing the interface class... I don't want every time to write the code taking care of a connection and publishing data... Could it be that I can do this just by writing a JSON file and my control module ?"
breadcrumb: true
categories:
    - projects
header:
    image_fullwidth: "projects-srvpubctrl-inverted.png"
image:
    thumb: "projects-srvpubctrl.png"
---

_A controller for deploying servers and publishers._


### General

This generic package implements the creation of network servers and publishers that can be deployed to a machine and with their functionality being defined in an independent control module and configured through a JSON configuration file.

In the context of this package, a server is an entity that implements a request-reply communication scheme, waiting for the request from the client.
A publisher on the other side, implements a publish-subscribe scheme, where clients can connect to the server subscribing to whatever data the publisher publishes.

The settings of the srv-pub-ctrl are defined at the input configuration file.
The structure of the configuration file and the corresponding created objects can be seen at the schematic below.

{% include _image_with_caption.html url="/images/projects-srvpubctrl.png" 
                                    description="The structure of the JSON configuration file and the related objects." 
%}

The package reads the JSON configuration file and uses introspection at runtime to import and verify the control module, executes the requested actions and deploys the servers or publishers (if set).

### Configuration JSON file

The configuration file is of JSON type.
The first key much be a unique key that defines the name of the device.
As displayed in the schematic a separate device controller (`DeviceCtrl`) process is started for each device.
Each `DeviceCtrl` also has a separate logger storing the messages in files based on the unique key of the device (under `/var/log/` in case of user `root`, at `$HOME` in different case).

The `DeviceCtrl` parses the configration of the specific device.
The configuration consists of 3 parts only the first of which is required while the others are optional.
The obligatory setting is the `device` section and its `setup` subsection.
At this point, the module to be imported is defined and the control class instance of our device is created with the given arguments and keywords.

Since it is possible that some initialization actions could be needed to be performed,  these can be declared into the optional `initialize` subsection of the `device`.

As `action` is defined a dictionary that has the following elements:

+ `method`: obligatory - the method to be executed; should be defined in the control class
+ `args`, `kwargs`: optional - any arguments or keyword arguments needed by the method

After the execution, the return values of the initialization are returned to verify the correct execution of the actions.

With just the above functionality it is clear to see, that the package could be used even for startup actions without the spawning of any servers or publishers.

If the section of `server` exists then the package will try to start a server at the defined `ip:port`.
The `port` must be defined while the `ip` can be omitted and is by default set to `0.0.0.0`.
The servers waits for connections and starts a new process for each connected client.
A client can send a request to the server in the form of a sequence of actions and the reply is a list with the return values of said actions.

If the section of `publisher` exists then the package will try to start a publisher  at the defined `ip:port`.
The `port` must be defined while the `ip` can be omitted and is by default set to `0.0.0.0`.
In addition, for the publisher an action list must be defined. This action list is what is going to be periodically executed (every `timeout` seconds) and the return values are going to be returned to any connected subscriber.
If the `with_timeout` argument is set, then together with the returned data the elapsed time is going to be returned.
