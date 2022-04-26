### 组件介绍
**“聚集”（Aggregate）**控件用于按秒、分钟、小时、天、周、月或年对数据进行聚合。

<hr/>

- 输入：
  - tsd：时序数据
- 输出：
  - tsd：按秒、分钟、小时、天、周、月或年聚合后的数据

<hr/>


### 页面介绍
点击**“聚集”（Aggregate）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/time-series/aggregate/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>聚集依据</td> 
      <td>
      按秒、分钟、小时、天、周、月或年进行聚集
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>聚集操作</td> 
      <td>
      指定每个属性的聚集操作
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，使用**“查看数据”（Data Table）**查看数据集，同时连接**“聚集”（Aggregate）**控件对数据进行聚集操作，之后使用**“查看数据”（Data Table）**控件查看处理后的数据。  
![workflow](/img/aistudio/time-series/aggregate/workflow.png)

案例中加载 airpassengers 数据集，对于**“聚集”（Aggregate）**控件，选择聚集依据为year，对属性【Air passengers】进行“Mean”操作计算平均值，案例中控件的配置以及执行结果如下图所示。   
![workflow-result](/img/aistudio/time-series/aggregate/workflow-result.png)