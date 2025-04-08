![Publish Status](https://github.com/ether/ep_prometheus/workflows/Node.js%20Package/badge.svg) ![Backend Tests Status](https://github.com/ether/ep_prometheus/workflows/Backend%20tests/badge.svg)

# Prometheus Etherpad integration

Exposes endpoint at ``/metrics`` for Grafana / Prometheus to slobber from.

## Usage

See the collected stats at ``/metrics``

## Example queries for Grafana

```
{__name__=~"ep_performance_test_hooks_loadTimes__(.*)_fetchUntilResponseEndTime"}
``` 

```
{__name__=~"ep_performance_test_hooks_loadTimes__(.*)_fetchUntilResponseEndTime"}
```

```
ep_performance_test_hooks_etherpadHooksDuration_postAceInit
```

```
totalUsers
```

```
(memoryUsageHeap / 1024 / 1024)
```
