# `ep_headerauth`

Etherpad plugin to use a reverse proxy's HTTP headers for authentication.

If the `X-Authenticated-User` header is present in the HTTP request coming from
your reverse proxy, then the user is considered to have already been
authenticated by your reverse proxy. The header's value is used as the user's
username.

If the `X-Authenticated-Name` header is present, the user's displayed name is
forced to that header's value.

The headers used by the plugin can be customized.

## Configuration

In your `settings.json`:

```
{
  // ...
  "trustProxy": true,
  "headerauth": {
    // Defaults to "x-authenticated-user"
    "username_header": "x-authenticated-user",
    // Defaults to "x-authenticated-name"
    "displayname_header": "x-authenticated-name"
  },
  // ...
}
```

## Copyright and License

Copyright © 2020 Richard Hansen <rhansen@rhansen.org>

Licensed under the [Apache License, Version 2.0](LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
